package com.example.application.views.home;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.cookieconsent.CookieConsent;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;


import javax.annotation.security.PermitAll;

@PermitAll
@Route(value = "home", layout = MainLayout.class)
@PageTitle("Ardit Sokoli")
public class home extends HorizontalLayout {

    public home() {

        VerticalLayout layout = new VerticalLayout() ;
        layout.add(new H1("Ardit Sokoli"));
        layout.add(new H2("Web Developer"));
        layout.setAlignItems(Alignment.CENTER);
        layout.setClassName("hello");
        HorizontalLayout social = new HorizontalLayout() ;
        Icon facebookIcon = VaadinIcon.FACEBOOK.create();
        Icon twitterIcon = VaadinIcon.TWITTER.create();

        Button linkedIn = new Button("LinkedIn");
        Button twitter = new Button(twitterIcon);
        Button gitHub = new Button("GitHub");
        Button facebook = new Button(facebookIcon);

        social.add(linkedIn,twitter,gitHub,facebook);

        layout.add(social);

        add(layout);
        CookieConsent cookieConsent = new CookieConsent();
        add(cookieConsent);
    }




}
