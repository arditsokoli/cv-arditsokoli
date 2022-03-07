package com.example.application.views.blog;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;

import javax.annotation.security.PermitAll;

@PermitAll
@Route(value = "blog", layout = MainLayout.class)
@PageTitle("Ardit Sokoli")
public class blog extends HorizontalLayout {

    private H1 name;
    private Button sayHello;

    public blog() {
        name = new H1("// Working ...");

        add(name);
    }

}
