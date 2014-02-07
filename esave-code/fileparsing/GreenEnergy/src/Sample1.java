import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.LineNumberReader;
import java.io.RandomAccessFile;

public class Sample1 {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String devHex = "00 03";
		double a = 0.3452423;

		// System.out.println(String.valueOf(a));

		if (devHex.contains("00")) {
			System.out.println("Iron Box");
		} else if (devHex.contains("01")) {
			System.out.println("Coffee Maker");
		}

		// String len =
		// "Rx: 1F 44 81 00 00 77 00 1F 2B D7 D7 00 40 00 A6 70 07 00 00 0E 00 03 00 48 01 90 00 08 00 1C 00 01 00 05 - 06-May-2012 16:40:08";
		// System.out.println("Len length -->" + len.length());

		try {
			File file = new File(
					"C:\\School\\GA\\Green Energy\\Source Code\\Utilities\\Data_Log_Every_Hour\\Data_Log_Every_Hour\\E_Save_log_20120511T115203.txt");
			// FileWriter fileWriter = new FileWriter(file, true);
			// String aa = "hello";
			// // fileWriter.write("UMKC eSAVE");
			// // fileWriter.write("\n");
			// for (long i = 0; i < 25; i++) {
			// //fileWriter.write(aa + i + "Hello World" + "Hi");
			//
			// fileWriter.write("R - x: 1F 44 81 00 00 77 00 7C 6F D7 D7 00 64 00 4C 88 07 00 00 0E 00 03 00 47 07 D0 00 01 00 01 FF FD 00 31 - 6-Mar-2012 13:00:08");
			// fileWriter.write("\n");
			// fileWriter.write("R - x: 1F 44 81 00 00 77 00 7C 6F D7 D7 00 64 00 4C 88 07 00 00 0E 00 03 00 47 07 D0 00 01 00 01 FF FD 00 31 - 6-Mar-2012 13:00:08");
			// fileWriter.write("\n");
			// }
			// fileWriter.write("R - x: EN DD OF FI EE 77 00 7C 6F D7 D7 00 64 00 4C 88 07 00 00 0E 00 03 00 47 07 D0 00 01 00 01 FF FD 00 31 - 6-Mar-2012 13:00:08");
			// fileWriter.write("\n");
			//
			// fileWriter.flush();
			// fileWriter.close();

//			LineNumberReader lnr = new LineNumberReader(new FileReader(file));
//			lnr.skip(Long.MAX_VALUE);
//			System.out.println(lnr.getLineNumber());

			// File file = new File(
			// "C:\\School\\GA\\Green Energy\\Source Code\\Utilities\\Data_Log_Every_Hour\\Data_Log_Every_Hour\\sample.txt");

			RandomAccessFile rand = new RandomAccessFile(file, "rw");
			int i = (int) rand.length();
			String data, dateTime;
			// System.out.println("Length: " + i);
			//System.out.println("Line number -->" + lnr.getLineNumber());
			rand.seek(0); // Seek to start point of file
			for (int is = 0; is < i; is++) {
				String a1 = rand.readLine();
				int j = a1.length();
				System.out.println("length dsAt -->" + a1.length());
				//System.out.println(a1);
				if (j == 128) {
					 data = a1.substring(j - 124, j - 22);
					 dateTime = a1.substring(j - 20);

					 String energy = data.substring(78, 83);
					 energy = getReadings(energy);
					energy = getEnergyReadings(Double.parseDouble(energy));
					// System.out.println("data ---------> "+data); // convert
					//byte into char
					 //System.out.println("dateTime ----------> "+dateTime);
				}
			}
			rand.close();

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private static String getEnergyReadings(double energy) {
		double alpha = 0.4977419;
		double beta = -8.509677;
		energy = (energy * alpha) + beta;

		 System.out.println("********* Energy Calculation --> "
		 + String.valueOf(energy));
		return String.valueOf(energy);
	}

	private static String getReadings(String temp) {
		temp = temp.replaceAll(" ", "");
		int tempInt = Integer.parseInt(temp, 16);
		temp = String.valueOf(tempInt);
		return temp;
	}
}
