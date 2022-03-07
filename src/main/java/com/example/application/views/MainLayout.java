package com.example.application.views;


import com.example.application.views.about.about;
import com.example.application.views.blog.blog;
import com.example.application.views.contact.contact;
import com.example.application.views.home.home;
import com.example.application.views.projects.projects;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.tabs.Tab;
import com.vaadin.flow.component.tabs.Tabs;
import com.vaadin.flow.dom.ThemeList;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.theme.lumo.Lumo;


@PWA(name = "Flow CRM Tutorial", shortName = "Flow CRM Tutorial", enableInstallPrompt = false)
@Theme(themeFolder = "flowcrmtutorial")
@PageTitle("Ardit Sokoli")
@Route(value = "")
public class MainLayout extends AppLayout {
    public MainLayout() {
        DrawerToggle toggle = new DrawerToggle();

        H1 title = new H1("Ardit Sokoli");
        title.getStyle()
                .set("font-size", "var(--lumo-font-size-l)")
                .set("margin", "0");

        Button cv = new Button("Download CV");
        cv.addThemeVariants(ButtonVariant.LUMO_ICON);

        Image user = new Image("images/avatar.png", "User photo");

        user.addClassName("user");

        HorizontalLayout social = new HorizontalLayout();
        Icon facebookIcon = VaadinIcon.FACEBOOK.create();
        Icon twitterIcon = VaadinIcon.TWITTER.create();
        Icon youtubeIcon = VaadinIcon.YOUTUBE.create();


        Button git = new Button("GIT");
        Button twitter = new Button(twitterIcon);
        Button youtube = new Button(youtubeIcon);
        Button facebook = new Button(facebookIcon);
        git.addThemeVariants(ButtonVariant.LUMO_CONTRAST);
        twitter.addThemeVariants(ButtonVariant.LUMO_CONTRAST);
        youtube.addThemeVariants(ButtonVariant.LUMO_CONTRAST);
        facebook.addThemeVariants(ButtonVariant.LUMO_CONTRAST);

        social.add(twitter, youtube, facebook);
        social.addClassName("social");

        cv.addClassName("cv");
        Div title1 = new Div();
        title1.getStyle().set("width", "100%").set("border-top", "3px solid #888888");
        title1.setClassName("vija");

        UI.getCurrent().getElement().getThemeList().add(Lumo.DARK);
        Icon moon = VaadinIcon.MOON.create();
        Button toggleButton = new Button(moon, click -> {
            ThemeList themeList = UI.getCurrent().getElement().getThemeList();

            if (themeList.contains(Lumo.DARK)) {
                themeList.remove(Lumo.DARK);
            } else {
                themeList.add(Lumo.DARK);
            }
        });
        toggleButton.addThemeVariants(ButtonVariant.LUMO_CONTRAST);
        toggleButton.setClassName("togglebutton");


        Tabs tabs = getTabs();
        addToDrawer(tabs, title1, user, social, cv);
        addToNavbar(toggle, title, toggleButton);
    }


    private Tabs getTabs() {
        Tabs tabs = new Tabs();
        tabs.add(
                createTab(VaadinIcon.HOME, "Home", home.class),
                createTab(VaadinIcon.INFO, "About Me", about.class),
                createTab(VaadinIcon.RECORDS, "Projects", projects.class),
                createTab(VaadinIcon.LIST, "Blog", blog.class),
                createTab(VaadinIcon.PHONE, "Contact Me", contact.class)
        );

        tabs.setOrientation(Tabs.Orientation.VERTICAL);

        return tabs;
    }


    private Tab createTab(VaadinIcon viewIcon, String viewName, Class hello) {
        Icon icon = viewIcon.create();
        icon.getStyle()
                .set("box-sizing", "border-box")
                .set("margin-inline-end", "var(--lumo-space-m)")
                .set("margin-inline-start", "var(--lumo-space-xs)")
                .set("padding", "var(--lumo-space-xs)");

        RouterLink link = new RouterLink();
        link.add(icon, new Span(viewName));
        // Demo has no routes
        // link.setRoute(viewClass.java);
        link.setRoute(hello);
        link.setTabIndex(-1);
        return new Tab(link);
    }

}
