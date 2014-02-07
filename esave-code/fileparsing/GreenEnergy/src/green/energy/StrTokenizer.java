package green.energy;

import java.io.File;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

public class StrTokenizer {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
//		String asd = "1F 44 81 00 00 77 00 EB 85 D7 D7 00 6A 00 59 81 02 00 00 0E 00 03 00 46 07 D0 00 01 00 00 FF FD 00 30";
//		String header = asd.substring(0, 59);
//		System.out.println("Header -->"+header);
//		
//		String devHex = asd.substring(60, 65);
//		System.out.println("Hex Cod -->"+devHex);
//		
//		String temp = asd.substring(66, 71);
//		System.out.println("temp -->"+temp);
//		
//		String light = asd.substring(72, 77);
//		System.out.println("light -->"+light);
//		
//		String energy = asd.substring(78, 83);
//		System.out.println("energy -->"+energy);
//		
//		String accel = asd.substring(84, asd.length());
//		System.out.println("acccel -->"+accel);
		
//		SimpleDateFormat dateFormat = new SimpleDateFormat(
//				"dd-MM-yyyy hh:mm:ss");
//		Date convertedDate;
//		String dateTime = "06-05-2012 13:01:12";
//		try {
//			convertedDate = dateFormat.parse(dateTime);
//			System.out.println("Conv Date--> "+convertedDate);
//			GregorianCalendar gregorianCalendar = new GregorianCalendar();
//			gregorianCalendar.setTime(convertedDate);
//			XMLGregorianCalendar xmlGrogerianCalendar;
//
//			xmlGrogerianCalendar = DatatypeFactory.newInstance()
//					.newXMLGregorianCalendar(gregorianCalendar);
//			System.out.println(xmlGrogerianCalendar.toString());
//
//		} catch (ParseException e) {
//			e.printStackTrace();
//		} catch (DatatypeConfigurationException e) {
//			e.printStackTrace();
//		}
		
		String path = "C:\\School\\GA\\Green Energy\\Source Code\\Utilities\\Data_Log_Every_Hour\\Data_Log_Every_Hour";
		final long togetNewFile = 0;
		File folder = new File(path);
		
		File[] listOfFiles = folder.listFiles();
		long lastModified;
		for (File singleFile : listOfFiles) {
			if (singleFile.isFile()) {
				System.out.println("files modified -->"+singleFile.lastModified());
			}
		}
	}

}
