
package service;

import java.util.List;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.1.6 in JDK 6
 * Generated source version: 2.1
 * 
 */
@WebService(name = "EnergyWSService", targetNamespace = "http://service/")
@XmlSeeAlso({
    ObjectFactory.class
})
public interface EnergyWSService {


    /**
     * 
     * @param devices
     * @return
     *     returns int
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "energyDevice", targetNamespace = "http://service/", className = "service.EnergyDevice")
    @ResponseWrapper(localName = "energyDeviceResponse", targetNamespace = "http://service/", className = "service.EnergyDeviceResponse")
    public int energyDevice(
        @WebParam(name = "devices", targetNamespace = "")
        List<DeviceData> devices);

    /**
     * 
     * @return
     *     returns java.util.List<service.DeviceData>
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "getAllData", targetNamespace = "http://service/", className = "service.GetAllData")
    @ResponseWrapper(localName = "getAllDataResponse", targetNamespace = "http://service/", className = "service.GetAllDataResponse")
    public List<DeviceData> getAllData();

    /**
     * 
     * @return
     *     returns java.util.List<service.Device>
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "getDevices", targetNamespace = "http://service/", className = "service.GetDevices")
    @ResponseWrapper(localName = "getDevicesResponse", targetNamespace = "http://service/", className = "service.GetDevicesResponse")
    public List<Device> getDevices();

    /**
     * 
     * @param name
     * @return
     *     returns java.lang.String
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "hello", targetNamespace = "http://service/", className = "service.Hello")
    @ResponseWrapper(localName = "helloResponse", targetNamespace = "http://service/", className = "service.HelloResponse")
    public String hello(
        @WebParam(name = "name", targetNamespace = "")
        String name);

    /**
     * 
     * @param to
     * @param location
     * @param from
     * @return
     *     returns java.util.List<service.DeviceData>
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "getDatabyDates", targetNamespace = "http://service/", className = "service.GetDatabyDates")
    @ResponseWrapper(localName = "getDatabyDatesResponse", targetNamespace = "http://service/", className = "service.GetDatabyDatesResponse")
    public List<DeviceData> getDatabyDates(
        @WebParam(name = "from", targetNamespace = "")
        String from,
        @WebParam(name = "to", targetNamespace = "")
        String to,
        @WebParam(name = "location", targetNamespace = "")
        String location);

    /**
     * 
     * @param devices
     * @return
     *     returns int
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "registerDevice", targetNamespace = "http://service/", className = "service.RegisterDevice")
    @ResponseWrapper(localName = "registerDeviceResponse", targetNamespace = "http://service/", className = "service.RegisterDeviceResponse")
    public int registerDevice(
        @WebParam(name = "devices", targetNamespace = "")
        List<Device> devices);

    /**
     * 
     * @return
     *     returns java.util.List<java.lang.String>
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "getDeviceHexaCodes", targetNamespace = "http://service/", className = "service.GetDeviceHexaCodes")
    @ResponseWrapper(localName = "getDeviceHexaCodesResponse", targetNamespace = "http://service/", className = "service.GetDeviceHexaCodesResponse")
    public List<String> getDeviceHexaCodes();

    /**
     * 
     * @param deviceid
     * @return
     *     returns service.Device
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "getDeviceByDeviceID", targetNamespace = "http://service/", className = "service.GetDeviceByDeviceID")
    @ResponseWrapper(localName = "getDeviceByDeviceIDResponse", targetNamespace = "http://service/", className = "service.GetDeviceByDeviceIDResponse")
    public Device getDeviceByDeviceID(
        @WebParam(name = "deviceid", targetNamespace = "")
        String deviceid);

}
