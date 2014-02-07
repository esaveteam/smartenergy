import java.io.*;

class FileRead {
	public static void main(String args[]) {
		try {
			// Open the file that is the first
			// command line parameter
			FileInputStream fstream = new FileInputStream("C:\\Users\\Rajasekar Rajendran\\Desktop\\CS5590LD\\archive\\outputFolder\\output5.txt\\part-r-0008");
			// Get the object of DataInputStream
			DataInputStream in = new DataInputStream(fstream);
			BufferedReader br = new BufferedReader(new InputStreamReader(in));
			String strLine;
			File file = new File("C:\\Users\\Rajasekar Rajendran\\Desktop\\CS5590LD\\archive\\outputFolder\\output5.txt\\5.txt");
			
			if(!file.exists()){
				file.createNewFile();
			}
			FileWriter fileWriter = new FileWriter(file, true);
			// Read File Line By Line
			while ((strLine = br.readLine()) != null) {
				// Print the content on the console
				fileWriter.write(strLine);
				fileWriter.write("\n");
				//System.out.println(strLine);
			}
			fileWriter.flush();
			fileWriter.close();
			// Close the input stream
			in.close();
		} catch (Exception e) {// Catch exception if any
			System.err.println("Error: " + e.getMessage());
		}
	}
}