package green.energy;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

/**
 * @author Rajasekar Rajendran
 * 
 */
public class RegisterDevice {

	Map<String, String> dataIdMap = new HashMap<String, String>();

	/**
	 * @param args
	 */
	public String getDeviceId(String data) throws IOException {

		String devType = data.substring(60, 65);
		String deviceId = null;

		FileInputStream fileRdr = null;
		FileOutputStream out = null;
		try {
			fileRdr = new FileInputStream("deviceInfo.txt");
			DataInputStream dataIP = new DataInputStream(fileRdr);
			BufferedReader buffRdr = new BufferedReader(new InputStreamReader(
					dataIP));

			String deviceDetail;

			boolean firstAppend = false;
			while ((deviceDetail = buffRdr.readLine()) != null) {
				String[] deviceType = deviceDetail.split("#");
				if (deviceType != null && deviceType.length > 0) {
					dataIdMap.put(deviceType[0], deviceType[1]);
				}
				firstAppend = true;
			}

			if (!firstAppend) {
				int i = generateDeviceId(devType);
				String op = devType + String.valueOf(i);
				out = new FileOutputStream("deviceInfo.txt");
				byte[] contentInBytes = op.getBytes();
				out.write(contentInBytes);
				out.flush();
				out.close();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (out != null) {
					out.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		if (dataIdMap.containsKey(devType)) {
			deviceId = dataIdMap.get(devType);
		}
//		} else {
//			deviceId = generateDeviceId(devType);
//		}

		return deviceId;
	}

	private int generateDeviceId(String devType) {
		Random rand = new Random();
		String id = String.valueOf((rand.nextInt(9000) + 1000));
		String newDevType = devType.replace(" ", "");
		int deviceId = Integer.parseInt((id + newDevType));
		return deviceId;
	}

}
