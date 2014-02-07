
package service;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the service package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _GetDeviceHexaCodes_QNAME = new QName("http://service/", "getDeviceHexaCodes");
    private final static QName _GetDevices_QNAME = new QName("http://service/", "getDevices");
    private final static QName _GetDatabyDates_QNAME = new QName("http://service/", "getDatabyDates");
    private final static QName _HelloResponse_QNAME = new QName("http://service/", "helloResponse");
    private final static QName _GetAllData_QNAME = new QName("http://service/", "getAllData");
    private final static QName _GetDeviceHexaCodesResponse_QNAME = new QName("http://service/", "getDeviceHexaCodesResponse");
    private final static QName _EnergyDevice_QNAME = new QName("http://service/", "energyDevice");
    private final static QName _Hello_QNAME = new QName("http://service/", "hello");
    private final static QName _RegisterDeviceResponse_QNAME = new QName("http://service/", "registerDeviceResponse");
    private final static QName _GetAllDataResponse_QNAME = new QName("http://service/", "getAllDataResponse");
    private final static QName _RegisterDevice_QNAME = new QName("http://service/", "registerDevice");
    private final static QName _GetDatabyDatesResponse_QNAME = new QName("http://service/", "getDatabyDatesResponse");
    private final static QName _EnergyDeviceResponse_QNAME = new QName("http://service/", "energyDeviceResponse");
    private final static QName _GetDevicesResponse_QNAME = new QName("http://service/", "getDevicesResponse");
    private final static QName _GetDeviceByDeviceID_QNAME = new QName("http://service/", "getDeviceByDeviceID");
    private final static QName _GetDeviceByDeviceIDResponse_QNAME = new QName("http://service/", "getDeviceByDeviceIDResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: service
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link EnergyDeviceResponse }
     * 
     */
    public EnergyDeviceResponse createEnergyDeviceResponse() {
        return new EnergyDeviceResponse();
    }

    /**
     * Create an instance of {@link DeviceData }
     * 
     */
    public DeviceData createDeviceData() {
        return new DeviceData();
    }

    /**
     * Create an instance of {@link Device }
     * 
     */
    public Device createDevice() {
        return new Device();
    }

    /**
     * Create an instance of {@link GetAllDataResponse }
     * 
     */
    public GetAllDataResponse createGetAllDataResponse() {
        return new GetAllDataResponse();
    }

    /**
     * Create an instance of {@link GetDeviceByDeviceIDResponse }
     * 
     */
    public GetDeviceByDeviceIDResponse createGetDeviceByDeviceIDResponse() {
        return new GetDeviceByDeviceIDResponse();
    }

    /**
     * Create an instance of {@link Hello }
     * 
     */
    public Hello createHello() {
        return new Hello();
    }

    /**
     * Create an instance of {@link GetDatabyDatesResponse }
     * 
     */
    public GetDatabyDatesResponse createGetDatabyDatesResponse() {
        return new GetDatabyDatesResponse();
    }

    /**
     * Create an instance of {@link HelloResponse }
     * 
     */
    public HelloResponse createHelloResponse() {
        return new HelloResponse();
    }

    /**
     * Create an instance of {@link GetDatabyDates }
     * 
     */
    public GetDatabyDates createGetDatabyDates() {
        return new GetDatabyDates();
    }

    /**
     * Create an instance of {@link RegisterDevice }
     * 
     */
    public RegisterDevice createRegisterDevice() {
        return new RegisterDevice();
    }

    /**
     * Create an instance of {@link GetDeviceByDeviceID }
     * 
     */
    public GetDeviceByDeviceID createGetDeviceByDeviceID() {
        return new GetDeviceByDeviceID();
    }

    /**
     * Create an instance of {@link GetDevices }
     * 
     */
    public GetDevices createGetDevices() {
        return new GetDevices();
    }

    /**
     * Create an instance of {@link GetDeviceHexaCodes }
     * 
     */
    public GetDeviceHexaCodes createGetDeviceHexaCodes() {
        return new GetDeviceHexaCodes();
    }

    /**
     * Create an instance of {@link GetDevicesResponse }
     * 
     */
    public GetDevicesResponse createGetDevicesResponse() {
        return new GetDevicesResponse();
    }

    /**
     * Create an instance of {@link GetDeviceHexaCodesResponse }
     * 
     */
    public GetDeviceHexaCodesResponse createGetDeviceHexaCodesResponse() {
        return new GetDeviceHexaCodesResponse();
    }

    /**
     * Create an instance of {@link GetAllData }
     * 
     */
    public GetAllData createGetAllData() {
        return new GetAllData();
    }

    /**
     * Create an instance of {@link EnergyDevice }
     * 
     */
    public EnergyDevice createEnergyDevice() {
        return new EnergyDevice();
    }

    /**
     * Create an instance of {@link RegisterDeviceResponse }
     * 
     */
    public RegisterDeviceResponse createRegisterDeviceResponse() {
        return new RegisterDeviceResponse();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDeviceHexaCodes }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "getDeviceHexaCodes")
    public JAXBElement<GetDeviceHexaCodes> createGetDeviceHexaCodes(GetDeviceHexaCodes value) {
        return new JAXBElement<GetDeviceHexaCodes>(_GetDeviceHexaCodes_QNAME, GetDeviceHexaCodes.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDevices }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "getDevices")
    public JAXBElement<GetDevices> createGetDevices(GetDevices value) {
        return new JAXBElement<GetDevices>(_GetDevices_QNAME, GetDevices.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDatabyDates }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "getDatabyDates")
    public JAXBElement<GetDatabyDates> createGetDatabyDates(GetDatabyDates value) {
        return new JAXBElement<GetDatabyDates>(_GetDatabyDates_QNAME, GetDatabyDates.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link HelloResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "helloResponse")
    public JAXBElement<HelloResponse> createHelloResponse(HelloResponse value) {
        return new JAXBElement<HelloResponse>(_HelloResponse_QNAME, HelloResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetAllData }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "getAllData")
    public JAXBElement<GetAllData> createGetAllData(GetAllData value) {
        return new JAXBElement<GetAllData>(_GetAllData_QNAME, GetAllData.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDeviceHexaCodesResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "getDeviceHexaCodesResponse")
    public JAXBElement<GetDeviceHexaCodesResponse> createGetDeviceHexaCodesResponse(GetDeviceHexaCodesResponse value) {
        return new JAXBElement<GetDeviceHexaCodesResponse>(_GetDeviceHexaCodesResponse_QNAME, GetDeviceHexaCodesResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EnergyDevice }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "energyDevice")
    public JAXBElement<EnergyDevice> createEnergyDevice(EnergyDevice value) {
        return new JAXBElement<EnergyDevice>(_EnergyDevice_QNAME, EnergyDevice.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Hello }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "hello")
    public JAXBElement<Hello> createHello(Hello value) {
        return new JAXBElement<Hello>(_Hello_QNAME, Hello.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RegisterDeviceResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "registerDeviceResponse")
    public JAXBElement<RegisterDeviceResponse> createRegisterDeviceResponse(RegisterDeviceResponse value) {
        return new JAXBElement<RegisterDeviceResponse>(_RegisterDeviceResponse_QNAME, RegisterDeviceResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetAllDataResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "getAllDataResponse")
    public JAXBElement<GetAllDataResponse> createGetAllDataResponse(GetAllDataResponse value) {
        return new JAXBElement<GetAllDataResponse>(_GetAllDataResponse_QNAME, GetAllDataResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RegisterDevice }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "registerDevice")
    public JAXBElement<RegisterDevice> createRegisterDevice(RegisterDevice value) {
        return new JAXBElement<RegisterDevice>(_RegisterDevice_QNAME, RegisterDevice.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDatabyDatesResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "getDatabyDatesResponse")
    public JAXBElement<GetDatabyDatesResponse> createGetDatabyDatesResponse(GetDatabyDatesResponse value) {
        return new JAXBElement<GetDatabyDatesResponse>(_GetDatabyDatesResponse_QNAME, GetDatabyDatesResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EnergyDeviceResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "energyDeviceResponse")
    public JAXBElement<EnergyDeviceResponse> createEnergyDeviceResponse(EnergyDeviceResponse value) {
        return new JAXBElement<EnergyDeviceResponse>(_EnergyDeviceResponse_QNAME, EnergyDeviceResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDevicesResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "getDevicesResponse")
    public JAXBElement<GetDevicesResponse> createGetDevicesResponse(GetDevicesResponse value) {
        return new JAXBElement<GetDevicesResponse>(_GetDevicesResponse_QNAME, GetDevicesResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDeviceByDeviceID }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "getDeviceByDeviceID")
    public JAXBElement<GetDeviceByDeviceID> createGetDeviceByDeviceID(GetDeviceByDeviceID value) {
        return new JAXBElement<GetDeviceByDeviceID>(_GetDeviceByDeviceID_QNAME, GetDeviceByDeviceID.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDeviceByDeviceIDResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service/", name = "getDeviceByDeviceIDResponse")
    public JAXBElement<GetDeviceByDeviceIDResponse> createGetDeviceByDeviceIDResponse(GetDeviceByDeviceIDResponse value) {
        return new JAXBElement<GetDeviceByDeviceIDResponse>(_GetDeviceByDeviceIDResponse_QNAME, GetDeviceByDeviceIDResponse.class, null, value);
    }

}
