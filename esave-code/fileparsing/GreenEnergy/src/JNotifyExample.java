import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;

import green.energy.UploadData;
import net.contentobjects.jnotify.JNotify;
import net.contentobjects.jnotify.JNotifyListener;

/**
 * 
 * @author Jigar
 */
public class JNotifyExample {

	private UploadData upLoadData;

	public void sample() throws Exception {
		// path to watch
		String path = "C:\\School\\GA\\Green Energy\\Source Code\\Utilities\\Data_Log_Every_Hour\\Data_Log_Every_Hour";

		// watch mask, specify events you care about,
		// or JNotify.FILE_ANY for all events.
		int mask = JNotify.FILE_CREATED | JNotify.FILE_DELETED
				| JNotify.FILE_MODIFIED | JNotify.FILE_RENAMED;

		// watch subtree?
		boolean watchSubtree = false;

		// add actual watch
		int watchID = JNotify
				.addWatch(path, mask, watchSubtree, new Listener());

		// sleep a little, the application will exit if you
		// don't (watching is asynchronous), depending on your
		// application, this may not be required
		Thread.sleep(1000000);

		// to remove watch the watch
		boolean res = JNotify.removeWatch(watchID);
		if (!res) {
			// invalid watch ID specified.
		}
	}

	class Listener implements JNotifyListener {

		public void fileRenamed(int wd, String rootPath, String oldName,
				String newName) {
			print("renamed " + rootPath + " : " + oldName + " -> " + newName);
		}

		public void fileModified(int wd, String rootPath, String name) {
			File file = new File(
					"C:\\School\\GA\\Green Energy\\Source Code\\Utilities\\Data_Log_Every_Hour\\Data_Log_Every_Hour\\sample.txt");
			RandomAccessFile rand = null;
			try {
				rand = new RandomAccessFile(file, "r");
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			int i;
			try {
				i = (int) rand.length();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			try {
				rand.seek(0);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} // Seek to start point of file
			for (;;) {
				String a1;
				try {
					a1 = rand.readLine();

					// byte b = rand.readByte(); //read byte from the file
					if ("".equals(a1) || a1 == null) {
						break;
					}
					System.out.println(a1); // convert byte into char
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			try {
				rand.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			print("modified " + rootPath + " : " + name);
		}

		public void fileDeleted(int wd, String rootPath, String name) {
			print("deleted " + rootPath + " : " + name);
		}

		public void fileCreated(int wd, String rootPath, String name) {
			print("created " + rootPath + " : " + name + ":" + wd);
			// Runnable runnable = new UploadData(name, "creation", rootPath);
			// Thread t = new Thread(runnable);
			// t.setName(String.valueOf(wd));
			//
			// t.start();
		}

		void print(String msg) {
			System.err.println(msg);
		}
	}

	public static void main(String[] args) throws Exception {
		new JNotifyExample().sample();
	}
}
