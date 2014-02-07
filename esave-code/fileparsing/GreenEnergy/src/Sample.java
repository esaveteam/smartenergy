import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;


public class Sample {

	
	public static void main(String[] args){
		
		 Map<String, Long> fileSeek = new HashMap<String, Long>();
		 fileSeek.put("a", 11L);
		 fileSeek.put("b", 11L);
		 fileSeek.put("c", 11L);
		 fileSeek.put("d", 11L);
		 
		long a =  fileSeek.get("a");
		a = a + 11L;
		fileSeek.put("a", a);
		
		long b =  fileSeek.get("b");
		b = b * 11L;
		fileSeek.put("b", b);
		
		long c =  fileSeek.get("c");
		c = c - 11L;
		fileSeek.put("c", c);
		
		System.out.println(fileSeek.get("a"));
		System.out.println(fileSeek.get("b"));
		System.out.println(fileSeek.get("c"));
		System.out.println(fileSeek.get("d"));
//		int i = 0xFFFE;
//		int z = Integer.parseInt("0032",16);
//		System.out.println("Exp "+z);
//		String j = Integer.toBinaryString(i);
//		System.out.println(j);
//		String samp = "";
//		for(char a : j.toCharArray()){
//			if(a == '1'){
//				samp = samp + 0;
//			} else if(a == '0'){
//				samp = samp + 1;
//			}
//		}
//		String asasdd = "1F 44 81 00 00 77 00 EB 85 D7 D7 00 4B 00 BC DB 09 00 00 0E 00 03 00 46 03 84 00 01 00 01 FF FE 00 30";
//String time = "06-03-2012 13:03:05";
//		System.out.println("Int 2Str "+asasdd.split(" ").length+ " time "+time.length());
//		
//		
//		List<String> asd = new ArrayList<String>();
//		asd.add("a");
//		asd.add("a");
//		asd.add("a");
//		asd.add("a");
//		asd.add("a");
//		asd.add("a");
//		
//		Set<String> sef = new HashSet<String>(asd);
//		System.out.println(asd.toString());
//		System.out.println(sef.toString());
//		
//		System.out.println(samp);
	}
}
