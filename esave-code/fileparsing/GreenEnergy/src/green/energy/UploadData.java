/**
 * 
 */
package green.energy;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Logger;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import net.contentobjects.jnotify.JNotify;
import net.contentobjects.jnotify.JNotifyListener;
import service.Device;
import service.DeviceData;
import service.EnergyDeviceResponse;
import service.EnergyWSService;
import service.EnergyWSService_Service;
import service.RegisterDeviceResponse;

/**
 * @author Rajasekar Rajendran
 * 
 */
public class UploadData {

	private static final Logger logger = Logger.getLogger(UploadData.class
			.getName());
	private static List<DeviceData> deviceDatas;
	private static List<String> dataFile;

	// private String fileName;
	private static Set<String> registeredDevices = new HashSet<String>();

	private static Map<String, Long> fileSeek = new HashMap<String, Long>();

	public UploadData() {
	}

	/**
	 * @param args
	 */
	public void fileStatus(String fileName, String rootPath, long seekRange) {
		try {
			logger.info("Entering UploadData class --> fileStatus()");
			File file = new File(rootPath + "\\" + fileName);

			dataFile = new ArrayList<String>();
			RandomAccessFile rand = new RandomAccessFile(file, "r");
			long fileLen = rand.length();
			long seekLine = 0;
			if (fileSeek.containsKey(fileName)) {
				seekLine = fileSeek.get(fileName);
			} else {
				seekLine = 11;
				fileSeek.put(fileName, seekLine);
			}
			//logger.info("fileStatus1 execution successfull");
			rand.seek(seekRange);
			// Thread.sleep(5000);
			for (int i = 0; i < fileLen; i++) {
				String row = rand.readLine();
				if ("".equals(row) || row == null) {
					continue;
				}
				//logger.info("fileStatus2 execution successfull");
				dataFile.add(row);
			}
			rand.close();
			logger.info("fileStatus execution successfull");
			parseData(dataFile);

		} catch (Exception e) {
			e.printStackTrace();
			// System.err.println("Error: reader " + e.getMessage());
		}
	}

	private void parseData(List<String> dataList) {
		String data, dateTime;
		deviceDatas = new ArrayList<DeviceData>();
		for (String temp : dataList) {
			int i = temp.length();
			data = temp.substring(i - 121, i - 20);
			dateTime = temp.substring(i - 20);
			System.out.println(data);
			System.out.println("Data Len -->"+ data.length());
			System.out.println("Data split -->"+ data.split(" ").length);
			System.out.println(dateTime);
			System.out.println("Datatim Len -->"+ dateTime.length());
			String devHex = data.substring(60, 65);
			System.out.println("HEx len -->"+devHex);
			
			if (data.length() == 101 && data.split(" ").length == 34
					&& dateTime.length() == 20) {
				sendData(data, dateTime);
			}
		}
		}

	private void sendData(String data, String dateTime) {
		// String devId = registerDevice.getDeviceId(data);
		
		String devHex = data.substring(60, 65);
		logger.info("devId --> " + devHex);
		
		 upData(null, data, dateTime);
				 sendDataService();
	}

	private boolean checkRegisteredDevice(String devHex, String dateTime) {
		String tmpDevHex = devHex.replaceAll(" ", "");
		if (registeredDevices.contains(tmpDevHex)) {
			return true;
		} else {
			int i = registerDevice(devHex, dateTime);

			if (i > 0) {
				registeredDevices.add(tmpDevHex);
				return true;
			} else {
				return false;
			}
		}
	}

	private static void getRegisteredDevices() {
		//EnergyWSService_Service energyService = new EnergyWSService_Service();
		//EnergyWSService eDevice = energyService.getEnergyWSServicePort();
		//List<String> regDevices = eDevice.getDeviceHexaCodes();
		registeredDevices = new HashSet<String>();
		registeredDevices.add("00 03");
	}

	private int registerDevice(String devHex, String dateTime) {
		Device device = new Device();
		device.setCreatedby("Energy Co-ordinator");
		device.setCreationDate(dateTime);
		device.setDeviceHexaCode(devHex.replaceAll(" ", ""));
		device.setIsenabled("Yes");
		device.setDevtype("zigbee");
		device.setLocation("Energy Lab 451");
		device.setName(identifyDevice(devHex));

		List<Device> devices = new ArrayList<Device>();
		devices.add(device);

		EnergyWSService_Service energyService = new EnergyWSService_Service();
		EnergyWSService eDevice = energyService.getEnergyWSServicePort();

		RegisterDeviceResponse regResp = new RegisterDeviceResponse();
		regResp.setReturn(eDevice.registerDevice(devices));

		return regResp.getReturn();
	}

	private String identifyDevice(String devHex) {
		if (devHex.equals("00 00")) {
			return "Iron Box";
		} else if (devHex.equals("00 01")) {
			return "Coffee Maker";
		} else if (devHex.equals("00 02")) {
			return "Washing Machine";
		} else if (devHex.equals("00 03")) {
			return "Dryer";
		} else if (devHex.equals("00 04")) {
			return "Television";
		} else if (devHex.equals("00 05")) {
			return "Computer";
		} else if (devHex.equals("00 06")) {
			return "Mobile Charger";
		} else if (devHex.equals("00 07")) {
			return "Juicer";
		} else if (devHex.equals("00 08")) {
			return "Refrigerator";
		} else if (devHex.equals("00 09")) {
			return "Air Conditioner";
		} else if (devHex.equals("00 0A")) {
			return "Grinder";
		} else if (devHex.equals("00 0B")) {
			return "Hair Dryer";
		} else if (devHex.equals("00 0C")) {
			return "Microwave";
		} else if (devHex.equals("FF FF")) {
			return "Vacucm Cleaner";
		}
		return null;
	}

	private void upData(String devId, String data, String dateTime) {

		logger.info("Entering upData()");

		DeviceData device = new DeviceData();

		// String header = data.substring(0, 59);
		String devHex = data.substring(60, 65);
		String temp = data.substring(66, 71);
		String light = data.substring(72, 77);
		String energy = data.substring(78, 83);
		String accel = data.substring(84, data.length());

		temp = getReadings(temp);
		energy = getReadings(energy);
		System.out.println("Humidity Dec:"+energy);
		energy = getEnergyReadings(energy);
		accel = "0";
		light = getReadings(light);
		System.out.println("Temp"+temp);
		System.out.println("Humidity"+energy);
		System.out.println("Light"+light);
		device.setCreatedby("Energy co-ordinator");
		device.setCreationDate(getXMLDate(dateTime));
		device.setName("Device - 1");
		device.setAccelerometer(accel);
		device.setDeviceHexaCode(devHex.replaceAll(" ", ""));
		device.setTemperature(temp);
		device.setEnergyConsumption(energy);
		device.setModel("Electronics");
		device.setEnergyType("energy");
		device.setDevtype("zigbee");
		device.setLocation("Energy Lab 451");
		device.setIsenabled("true");
		deviceDatas.add(device);
	}

	private String getEnergyReadings(String energy) {
		float div=(Float.parseFloat(energy)/3000);
		float value= (float) ((div-0.1515)/.00636);
		
		return String.valueOf(value);
	}

	private String getReadings(String temp) {
		
		String temp1[] = temp.split(" ");
		
		int tempInt = Integer.parseInt(temp1[0], 16);
		tempInt=tempInt*256;
		int tempInt1 = Integer.parseInt(temp1[1], 16);
		tempInt=tempInt+tempInt1;
		temp = String.valueOf(tempInt);
		return temp;
	}

	private String getAccelValue(String accel) {

		int a = Integer.valueOf(accel.substring(0, 5).replaceAll(" ", ""), 16)
				.shortValue();
		int b = Integer.valueOf(accel.substring(6, 11).replaceAll(" ", ""), 16)
				.shortValue();
		int c = Integer
				.valueOf(accel.substring(12, 17).replaceAll(" ", ""), 16)
				.shortValue();

		String accelVal = a + " " + b + " " + " " + c;
		return accelVal;
	}

	private int sendDataService() {
		logger.info("send data start");
		EnergyWSService_Service energyService = new EnergyWSService_Service();
		EnergyWSService eDevice = energyService.getEnergyWSServicePort();
		EnergyDeviceResponse edResp = new EnergyDeviceResponse();
		System.out.print(deviceDatas);
		edResp.setReturn(eDevice.energyDevice(deviceDatas));
		logger.info("send data end");
		return edResp.getReturn();
	}

	private XMLGregorianCalendar getXMLDate(String dateTime) {
		SimpleDateFormat dateFormat = new SimpleDateFormat(
				"dd-MMM-yyyy hh:mm:ss");
		Date convertedDate;
		try {
			convertedDate = dateFormat.parse(dateTime);

			GregorianCalendar gregorianCalendar = new GregorianCalendar();
			gregorianCalendar.setTime(convertedDate);
			XMLGregorianCalendar xmlGrogerianCalendar;

			xmlGrogerianCalendar = DatatypeFactory.newInstance()
					.newXMLGregorianCalendar(gregorianCalendar);
			return xmlGrogerianCalendar;

		} catch (ParseException e) {
			e.printStackTrace();
		} catch (DatatypeConfigurationException e) {
			e.printStackTrace();
		}
		return null;
	}

	/***************************************************
	 *************** File Listener **********************
	 ***************************************************/

	public void sample() throws Exception {
		String path = "C:\\Users\\ydvh4\\Desktop\\testdata";

		int mask = JNotify.FILE_CREATED | JNotify.FILE_DELETED
				| JNotify.FILE_MODIFIED | JNotify.FILE_RENAMED;

		boolean watchSubtree = false;

		int watchID = JNotify
				.addWatch(path, mask, watchSubtree, new Listener());

		while (true) {
			Thread.sleep(1000000);
		}

	}

	class Listener implements JNotifyListener {

		public void fileRenamed(int wd, String rootPath, String oldName,
				String newName) {
			print("renamed " + rootPath + " : " + oldName + " -> " + newName);
		}

		public void fileModified(int wd, String rootPath, String name) {
			File file = new File(rootPath + "\\" + name);
			RandomAccessFile rand = null;
			long b = 0;
			try {
				rand = new RandomAccessFile(file, "r");
				long fileLen = rand.length();
				if (fileSeek.containsKey(name)) {
					long a = fileSeek.get(name);
					b = a;
					// a = a + fileLen;
					// fileSeek.put(name, a);
					fileSeek.put(name, fileLen);
				}

			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} finally {
				try {
					rand.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			print("modified " + rootPath + " : " + name);
			fileStatus(name, rootPath, b);
		}

		public void fileDeleted(int wd, String rootPath, String name) {
			print("deleted " + rootPath + " : " + name);
		}

		public void fileCreated(int wd, String rootPath, String name) {
			print("created " + rootPath + " : " + name + ":" + wd);
			if (!fileSeek.containsKey(name)) {
				long size = 11;
				fileSeek.put(name, size);
			}
		}

		void print(String msg) {
			System.err.println(msg);
		}
	}

	public static void main(String[] args) {
		getRegisteredDevices();
		try {
			new UploadData().sample();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
