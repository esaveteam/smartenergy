import java.io.IOException;
import java.io.RandomAccessFile;


public class RandAccess {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try{
			//File file =  new File();
			  //Open the file for both reading and writing
			  RandomAccessFile rand = new RandomAccessFile("helo","r"); 
			  int i=(int)rand.length();
			  System.out.println("Length: " + i);
			 rand.seek(0);  //Seek to start point of file
			  for(int ct = 0; ct < i; ct++){
			  byte b = rand.readByte(); //read byte from the file
			  System.out.print((char)b); //convert byte into char
			  }
			  rand.close();
			  }
			  catch(IOException e)
			  {
			  System.out.println(e.getMessage());
			  }
	}

}
