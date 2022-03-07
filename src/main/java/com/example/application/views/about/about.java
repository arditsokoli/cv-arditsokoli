package com.example.application.views.about;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.polymertemplate.EventHandler;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import javax.annotation.security.PermitAll;


@PermitAll
@Tag("hello-world")
@NpmPackage(value = "@polymer/paper-input", version = "3.0.2")
@JsModule("hello-world.js")
@Route(value = "about", layout = MainLayout.class)
@PageTitle("Ardit Sokoli")
public class about extends PolymerTemplate<HelloWorldModel> {

    public about() {
        setId("template");
    }
}