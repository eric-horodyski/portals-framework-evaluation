package io.ionic.cs.portals.portalsplayground;

import android.app.Application;

import androidx.annotation.IdRes;

import io.ionic.portals.Portal;
import io.ionic.portals.PortalFragment;
import io.ionic.portals.PortalManager;

public class PlaygroundApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        PortalManager.register(getString(R.string.portals_api_key));

        PortalManager.newPortal("portal1").setStartDir("portals/angular").create();
        PortalManager.newPortal("portal2").setStartDir("portals/react").create();
        PortalManager.newPortal("portal3").setStartDir("portals/vue").create();
    }
}
