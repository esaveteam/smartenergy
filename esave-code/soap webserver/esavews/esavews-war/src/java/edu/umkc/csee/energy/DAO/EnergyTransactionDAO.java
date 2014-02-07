/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.umkc.csee.energy.DAO;

import edu.umkc.csee.energy.model.Device;
import edu.umkc.csee.energy.model.DeviceData;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.*;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.hbase.HBaseConfiguration;
import org.apache.hadoop.hbase.HColumnDescriptor;
import org.apache.hadoop.hbase.HTableDescriptor;
import org.apache.hadoop.hbase.KeyValue;
import org.apache.hadoop.hbase.MasterNotRunningException;
import org.apache.hadoop.hbase.ZooKeeperConnectionException;
import org.apache.hadoop.hbase.client.Get;
import org.apache.hadoop.hbase.client.HBaseAdmin;
import org.apache.hadoop.hbase.client.HConnectionManager;
import org.apache.hadoop.hbase.client.HTable;
import org.apache.hadoop.hbase.client.Put;
import org.apache.hadoop.hbase.client.Result;
import org.apache.hadoop.hbase.util.Bytes;

/**
 *
 * @author dpal
 */
public class EnergyTransactionDAO {
    
    private int rows;
    private int cou=abc();
    private static Configuration conf = null;
	/**
	 * Initialization
	 */
	static {
		conf = HBaseConfiguration.create();
		conf.clear();
		conf.set("hbase.zookeeper.quorum", "170.225.97.151");
		conf.set("hbase.zookeeper.property.clientPort","2181");
		conf.set("hbase.master", "vhost0406.dc1.co.us.compute.ihost.com:60001");	
	}

    public int getDeviceID(Connection con,String devHexaVode) throws SQLException{
        int devid = -999;
        String sql = "SELECT device_id FROM DEVICE WHERE device_hexa_code='" + devHexaVode +"'";
        Statement stmt = con.createStatement();
        ResultSet rs = stmt.executeQuery(sql);
        
        while (rs.next()){
            devid = rs.getInt(1);
        }
        return devid;
    }
    
        public List<DeviceData> getData(String fromDate, String toDate, String location){
           
            List<DeviceData> d = new ArrayList<DeviceData>();
        DBConn c = new DBConn();
        Connection con = null;
        String locStr = "";
        if ( location.equals("0")){
            locStr = "";
        }
        else{  
            locStr = " and x.location= '" + location +"' ";
        }
        String sql = "SELECT x.device_id,x.name,x.devtype,x.location,x.isenabled,x.model, x.creation_date " +
                     ", y.energy_type, y.storage, y.datatype, y.timestamp " +
                     ",z.time_duration "
                + " from DEVICE x, DATA y, DEVICE_DATA z where " +
                " y.dataid = z.data_id and z.device_id=x.device_id and y.TIMESTAMP>= to_date('" +fromDate + "','%Y-%m-%d %H:%M:%S')" +
                " and y.timestamp <= to_date('" + toDate +"', '%Y-%m-%d %H:%M:%S')" + locStr +
                " order by y.timestamp";
        System.out.println(sql);
                try{
                con = c.getConnection();
                Statement stmt = con.createStatement();
                ResultSet rs = stmt.executeQuery(sql);
                while ( rs.next() ){
                    
                    DeviceData d1 = new DeviceData();
                   // d1.setCreatedby(rs.getString("createdby"));
                    d1.setCreation_date(rs.getTimestamp("creation_date"));
                    d1.setDevtype(rs.getString("devtype"));
                    d1.setIsenabled(rs.getString("isenabled"));
                    d1.setLocation(rs.getString("location"));
                    d1.setModel(rs.getString("model"));
                    d1.setName(rs.getString("name"));
                    d1.setDeviceid(rs.getInt("device_id"));
                    d1.setDatatype(rs.getString("datatype"));
                    d1.setLocation(rs.getString("location"));
                    d1.setIsenabled(rs.getString("isenabled"));
                    d1.setModel(rs.getString("model"));
                    d1.setEnergy_type(rs.getString("energy_type"));
                    d1.setStorage(rs.getString("storage"));
                    d1.setTime_duration(rs.getLong("time_duration"));
                    d.add(d1);
                }
        }
        catch(Exception e){
            e.printStackTrace();
        }
                finally{
            try{
                if ( con != null ){
                    con.close();
                }
            }
            catch(Exception e){
                System.out.println("Error in device insert: " + e);

            }
                
        }

        
        
            return d;
        }
   
        
        
        public List<DeviceData> getData(){
            List<DeviceData> d = new ArrayList<DeviceData>();
        DBConn c = new DBConn();
        Connection con = null;
        String sql = "SELECT  skip " + 0 + " first " + 100 +" x.device_id,x.name,x.devtype,x.location,x.isenabled,x.model, x.creation_date " +
                     ", y.energy_type, y.storage, y.datatype, y.timestamp " +
                     ",z.time_duration, z.temperature, z.accelerometer, z.energy_con "
                + " from DEVICE x, DATA y, DEVICE_DATA z  where " +
                " y.dataid = z.data_id and z.device_id=x.device_id order by y.timestamp desc";
                try{
                con = c.getConnection();
                Statement stmt = con.createStatement();
                ResultSet rs = stmt.executeQuery(sql);
                while ( rs.next() ){
                    
                    DeviceData d1 = new DeviceData();
                    d1.setCreation_date(rs.getTimestamp("creation_date"));
                    d1.setDevtype(rs.getString("devtype"));
                    d1.setIsenabled(rs.getString("isenabled"));
                    d1.setLocation(rs.getString("location"));
                    d1.setModel(rs.getString("model"));
                    d1.setName(rs.getString("name"));
                    d1.setDeviceid(rs.getInt("device_id"));
                    d1.setDatatype(rs.getString("datatype"));
                    d1.setLocation(rs.getString("location"));
                    d1.setIsenabled(rs.getString("isenabled"));
                    d1.setModel(rs.getString("model"));
                    d1.setEnergy_type(rs.getString("energy_type"));
                    d1.setStorage(rs.getString("storage"));
                    d1.setTime_duration(rs.getLong("time_duration"));
                    d1.setAccelerometer(rs.getString("accelerometer"));
                    d1.setTemperature(rs.getString("temperature"));
                    d1.setEnergy_consumption(rs.getString("energy_con"));

                    d.add(d1);
                }
                rs.close();
                stmt.close();
        }
        catch(Exception e){
            e.printStackTrace();
        }
                finally{
            try{
                if ( con != null ){
                    con.close();
                }
            }
            catch(Exception e){
                            System.out.println("Error in device insert: " + e);

            }
                
        }

        
        
            return d;
        }

        
        public ArrayList<String> getDeviceData(String deviceID){
           // int devid = Integer.valueOf(deviceID);
                ArrayList<String> a=new ArrayList<String>();
                try{
             HTable table = new HTable(conf, "esave");
              int ab=cou;
              ab=ab-1;
              String count=Integer.toString(ab);
             System.out.print(count);
              String rowKey=count.concat(deviceID);
              System.out.print(rowKey);
             Get get = new Get(rowKey.getBytes());
        Result rs = table.get(get);
        for(KeyValue kv : rs.raw()){
            System.out.print(new String(kv.getRow()) + " " );
            System.out.print(new String(kv.getFamily()) + ":" );
            System.out.print(new String(kv.getQualifier()) + " " );
            System.out.print(kv.getTimestamp() + " " );
            System.out.println(new String(kv.getValue()));
            a.add(new String(kv.getValue()));
        }
 
        } catch (IOException e){
            e.printStackTrace();
        }
                finally
                {
                HConnectionManager.deleteConnection(conf,true);
                }
                //a.add(1, deviceID);
         return a;
    }

    
    public List<Device> getDeviceData(){
        List<Device> devices = new ArrayList<Device>();
        return devices;
        }
    
    public int registerDevice(List<Device> dev){
        
        int result = 0;
        DBConn c = new DBConn();
        String sql1 = "insert into device (device_id,name,devtype,location,isenabled,createdby,model,device_hexa_code) " +
                     "values (seq_dev.NEXTVAL,?,?,?,?,?,?,?)";
        Connection conn = null;
        PreparedStatement pstmt1 = null;
        try{
            conn = c.getConnection();
            System.out.println(" connection   " +  conn.getCatalog());
            conn.setAutoCommit(false);
            pstmt1 = conn.prepareStatement(sql1);
            
            for ( Device d: dev){
                    pstmt1.setString(1, d.getName());
                    pstmt1.setString(2, d.getDevtype());
                    pstmt1.setString(3, d.getLocation());         
                    pstmt1.setString(4, d.getIsenabled());
                    pstmt1.setString(5, d.getCreatedby());
                    pstmt1.setString(6, d.getModel());
                    pstmt1.setString(7, d.getDevice_hexa_code());
                    pstmt1.executeUpdate();


            }
             conn.commit();
             pstmt1.close();

        }
        catch(Exception ex){
            result = -1;
            ex.printStackTrace();
         
        }
        finally{
            if ( conn != null ){
                try{
                    conn.close();
                    
                }
                catch(Exception e1){
                    e1.printStackTrace();
                }
            }
        }

        return result;
    }
    public int addRecord(String tableName, String rowKey,
			String family, String qualifier, String value) throws Exception {
		try {
			HTable table = new HTable(conf, tableName);
			Put put = new Put(Bytes.toBytes(rowKey));
			put.add(Bytes.toBytes(family), Bytes.toBytes(qualifier), Bytes
					.toBytes(value));
			table.put(put);
			cou++;
                        System.out.println("insert recored " + rowKey + " to table "
					+ tableName + " ok.");
		} catch (IOException e) {
                    
   try{
      
      OutputStream os = new FileOutputStream("C:/Users/ydVH4/Desktop/test.txt");
         os.write(cou); // writes the bytes
      
      os.close();
     
         }catch(IOException eb){
      System.out.print("Exception");
   }	
   
			e.printStackTrace();
                     
		}
                finally
                {
                     try{
      
      OutputStream os = new FileOutputStream("C:/Users/ydVH4/Desktop/test.txt");
         os.write(cou); // writes the bytes
      
      os.close();
     
         }catch(IOException eb){
      System.out.print("Exception");
   }	
   
                HConnectionManager.deleteConnection(conf,true);
                }
                
                return 1;
	}
    public int insertDeviceData(List<DeviceData> devList) throws ZooKeeperConnectionException, MasterNotRunningException, IOException, Exception{
       String tableName="esave";
       String[] familys = { "energyconsumption" }; 
       HBaseAdmin admin = new HBaseAdmin(conf);
		if (admin.tableExists(tableName)) {
			System.out.println("table already exists!");
		} else {
			HTableDescriptor tableDesc = new HTableDescriptor(tableName);
			for (int i = 0; i < familys.length; i++) {
				tableDesc.addFamily(new HColumnDescriptor(familys[i]));
			}
			admin.createTable(tableDesc);
			System.out.println("create table " + tableName + " ok.");
		}
                
      HConnectionManager.deleteConnection(conf,true);          
 //int a=addRecord("esave","OE","energyconsumption", "", "200");
      
            

            Iterator<DeviceData> it = devList.iterator();
            System.out.print(it);
            System.out.print(devList);
             int a=0;
            while ( it.hasNext() ){
            DeviceData    dev = it.next();
                System.out.print(dev);
           try {
               System.out.print("in while");
               java.util.Date date= new java.util.Date();
	 System.out.println(new Timestamp(date.getTime()));
         String ab=Integer.toString(cou);
         String rk=ab.concat(dev.getDevice_hexa_code());
         
               a=addRecord("esave", rk,"energyconsumption","", dev.getEnergy_consumption());
           } catch (Exception ex) {
               Logger.getLogger(EnergyTransactionDAO.class.getName()).log(Level.SEVERE, null, ex);
           }
            }
            return a;      
    }

    @Override
    public String toString() {
        return "EnergyTransactionDAO{" + "rows=" + rows + ", cou=" + cou + '}';
    }

    /**
     * @return the rows
     */
    public int getRows() {
        return rows;
    }

    /**
     * @param rows the rows to set
     */
    public void setRows(int rows) {
        this.rows = rows;
    }

    private int abc() {
    int j=0;        
   try{
      
     
      InputStream is = new FileInputStream("C:/Users/ydVH4/Desktop/test.txt");
      int size = is.available();

      for(int i=0; i< size; i++){
         j=is.read();
          System.out.print((char)is.read() + "  ");
      }
      is.close();
      return j;
   }catch(IOException e){
      System.out.print("Exception");
      return 0;
   }	
   }
            
    }

