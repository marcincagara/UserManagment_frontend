package com.staz.dto;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;


@Getter
@Setter
@ToString
public class User {


    private Integer id;
    private String name;
    private String password;
    private String firstName;
    private String lastName;
    private String dateOfBirth;
    private List<UserGroup> userGroups;

    public User(){}

}
