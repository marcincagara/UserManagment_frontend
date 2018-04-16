package com.staz.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class UserController {

    @GetMapping("/")
    public String main(){
        return "main";
    }

    @GetMapping("/users")
    public String getAll(){
        return "all-users";
    }

    @GetMapping("/add")
    public String addUser(){
        System.out.println("inside add");
        return "add-user";
    }

//    @PostMapping("/update")
//    public String  updateUser(@RequestBody User user, Map<String, User> model){
//        System.out.println(user);
//        model.put("user",user);
//        return "update-user";
//    }

    @GetMapping("/update/{id}")
    public String  updateUser(@PathVariable("id") Integer id, Model model){
        System.out.println(id);
        model.addAttribute("user",id);
        return "update-user";
    }
}
