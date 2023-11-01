package com.mundongo.demondongo.dto;

public class SignUpRequest {
    private String email;
    private String password;
    private String name;
    private String lastName;

    private Boolean isAdmin;

    public SignUpRequest(){
    }
    
    public SignUpRequest(String email, String password, String name, String lastName, Boolean isAdmin){
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
        this.isAdmin = isAdmin;
    }

    public String getEmail(){
        return this.email;
    }

    public String getPassword(){
        return this.password;
    }

    public String getName(){
        return this.name;
    }

    public String getLastName(){
        return this.lastName;
    }

    public Boolean getIsAdmin(){
        return this.isAdmin;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public void setName(String name){
        this.name = name;
    }

    public void setLastName(String lastName){
        this.lastName = lastName;
    }

    public void setIsAdmin(Boolean isAdmin){
        this.isAdmin = isAdmin;
    }

}
