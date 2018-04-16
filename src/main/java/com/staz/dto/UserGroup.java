package com.staz.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;


@Getter
@Setter
@ToString
public class UserGroup {

    private Integer userGroupId;
    private String name;
    private List<User> usersList;

    public UserGroup() {
    }
}
