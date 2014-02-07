/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.umkc.csee.energy.model;

/**
 *
 * @author dpal
 */
public class Device {
    private String name;
    private String devtype;
    private String location;
    private String isenabled;
    private String createdby;
    private String creation_date;
    private String device_dataid;
    private String model;
    private String device_hexa_code;

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the devtype
     */
    public String getDevtype() {
        return devtype;
    }

    /**
     * @param devtype the devtype to set
     */
    public void setDevtype(String devtype) {
        this.devtype = devtype;
    }

    /**
     * @return the location
     */
    public String getLocation() {
        return location;
    }

    /**
     * @param location the location to set
     */
    public void setLocation(String location) {
        this.location = location;
    }

    /**
     * @return the isenabled
     */
    public String getIsenabled() {
        return isenabled;
    }

    /**
     * @param isenabled the isenabled to set
     */
    public void setIsenabled(String isenabled) {
        this.isenabled = isenabled;
    }

    /**
     * @return the createdby
     */
    public String getCreatedby() {
        return createdby;
    }

    /**
     * @param createdby the createdby to set
     */
    public void setCreatedby(String createdby) {
        this.createdby = createdby;
    }

    /**
     * @return the creation_date
     */
    public String getCreation_date() {
        return creation_date;
    }

    /**
     * @param creation_date the creation_date to set
     */
    public void setCreation_date(String creation_date) {
        this.creation_date = creation_date;
    }

    /**
     * @return the device_dataid
     */
    public String getDevice_dataid() {
        return device_dataid;
    }

    /**
     * @param device_dataid the device_dataid to set
     */
    public void setDevice_dataid(String device_dataid) {
        this.device_dataid = device_dataid;
    }

    /**
     * @return the model
     */
    public String getModel() {
        return model;
    }

    /**
     * @param model the model to set
     */
    public void setModel(String model) {
        this.model = model;
    }

    /**
     * @return the device_hexa_code
     */
    public String getDevice_hexa_code() {
        return device_hexa_code;
    }

    /**
     * @param device_hexa_code the device_hexa_code to set
     */
    public void setDevice_hexa_code(String device_hexa_code) {
        this.device_hexa_code = device_hexa_code;
    }
    
}
