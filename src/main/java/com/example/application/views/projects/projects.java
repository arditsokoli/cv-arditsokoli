package com.example.application.views.projects;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H6;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import javax.annotation.security.PermitAll;

@PermitAll
@Route(value = "projects", layout = MainLayout.class)
@PageTitle("Ardit Sokoli")
public class projects extends HorizontalLayout {


    private Button sayHello;

    public projects() {
        setSpacing(false);
        VerticalLayout layout = new VerticalLayout() ;
        layout.add(new H6("Kliko per te hapur projektin:"));
        sayHello = new Button("Projekti");
        sayHello.addClickListener(e -> {
            UI.getCurrent().getPage().executeJavaScript("window.open('http://localhost:8080');");
        });
        layout.add(sayHello);
        layout.setAlignItems(Alignment.CENTER);
        setSizeFull();
        setJustifyContentMode(JustifyContentMode.CENTER);
        getStyle().set("text-align", "center");
        add(layout);
    }

}
