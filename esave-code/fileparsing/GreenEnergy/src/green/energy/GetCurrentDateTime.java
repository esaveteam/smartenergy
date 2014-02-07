package green.energy;

import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class GetCurrentDateTime {
	public static void main(String[] args) {

		DateFormat dateFormat = new SimpleDateFormat("yyyyMMdd HHmmss");
		// get current date time with Date()
		Date date = new Date();
		System.out.println(dateFormat.format(date).replace(" ", "T"));
		
		String asd = dateFormat.format(date).replace(" ", "T").toString();
		asd = "E_Save_log_" + asd + ".txt";
		System.out.println(asd);
		// get current date time with Calendar()
		Calendar cal = Calendar.getInstance();
		System.out.println(dateFormat.format(cal.getTime()).replace(" ", "T"));
	}
}