/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import edu.umkc.csee.energy.DAO.EnergyTransactionDAO;
import edu.umkc.csee.energy.model.Device;
import edu.umkc.csee.energy.model.DeviceData;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import org.apache.hadoop.hbase.MasterNotRunningException;
import org.apache.hadoop.hbase.ZooKeeperConnectionException;

/**
 *
 * @author dpal
 */
@WebService(serviceName = "EnergyWSService")
public class EnergyWSService {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
    }
    
    
    @WebMethod(operationName = "energyDevice")
    public int energyDevice(@WebParam(name = "devices") List<DeviceData> devList) throws ZooKeeperConnectionException, MasterNotRunningException, IOException, Exception {
        EnergyTransactionDAO dao = new   EnergyTransactionDAO();
        int i= dao.insertDeviceData(devList);
    return i;
    }  

   @WebMethod(operationName = "registerDevice")
    public int registerDevice(@WebParam(name = "devices") List<Device> devList) {
        EnergyTransactionDAO dao = new   EnergyTransactionDAO();
        int i = 0;
    return i;
    }  

    
    @WebMethod(operationName = "getDevices")
    public Device[] getDevices() {
        EnergyTransactionDAO dao = new   EnergyTransactionDAO();
        List<Device> dList = dao.getDeviceData();
        Device[] d = new Device[dList.size()];
        int i = 0;
        for ( Device d1: dList){
            d[i] = d1;
            i++;
        }
        for ( Device d2: d){
        System.out.println(d2.getDevtype());
                }
        
        return d;
    }  

   @WebMethod(operationName = "getDeviceHexaCodes")
    public String[] getDeviceHexaCodes() {
        EnergyTransactionDAO dao = new   EnergyTransactionDAO();
        List<Device> dList = dao.getDeviceData();
        String[] d = new String[dList.size()];
        int i = 0;
        for ( Device d1: dList){
            d[i] = d1.getDevice_hexa_code();
            i++;
        }
        for ( String d2: d){
        System.out.println(d2);
                }
        
        return d;
    }  

    
    
    @WebMethod(operationName = "getDeviceByDeviceID")
    public ArrayList<String> getDevicesByDeviceID(@WebParam(name = "deviceid") String deviceid) {
        EnergyTransactionDAO dao = new   EnergyTransactionDAO();
        ArrayList<String> d = dao.getDeviceData(deviceid);
    return d;
    }  

    @WebMethod(operationName = "getDatabyDates")
    public DeviceData[] getDatabyDates(@WebParam(name = "from") String from,@WebParam(name = "to") String to, @WebParam(name = "location") String location ) {
        List<DeviceData> dd1;
        EnergyTransactionDAO dao = new   EnergyTransactionDAO();
        dd1 = dao.getData(from, to, location);
        DeviceData[] dd = new DeviceData[dd1.size()];
        int i = 0;
        for ( DeviceData x: dd1){
            dd[i] = x;
            i++;
        }

    return dd;
    }  
    
        @WebMethod(operationName = "getAllData")
    public DeviceData[] getAllData() {
        EnergyTransactionDAO dao = new   EnergyTransactionDAO();
        List<DeviceData> devData = dao.getData();
        DeviceData[] dd = new DeviceData[devData.size()];
        int i = 0;
        for ( DeviceData x: devData){
            dd[i] = x;
            i++;
        }

        return dd;
    }  
        
        


    
}
