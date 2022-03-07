package com.example.application.views.projects;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import javax.annotation.security.PermitAll;

@PermitAll
@Route(value = "projects", layout = MainLayout.class)
@PageTitle("Ardit Sokoli")
public class projects extends HorizontalLayout {

    private TextField name;
    private Button sayHello;

    public projects() {
        name = new TextField("Yoasdasdur name");
        sayHello = new Button("Sayasdasd hello");
        sayHello.addClickListener(e -> {
            Notification.show("Heasdasdllo " + name.getValue());
        });

        setMargin(true);
        setVerticalComponentAlignment(Alignment.END, name, sayHello);

        add(name, sayHello);
    }

}
