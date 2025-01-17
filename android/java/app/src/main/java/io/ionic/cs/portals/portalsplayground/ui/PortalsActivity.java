package io.ionic.cs.portals.portalsplayground.ui;

import androidx.annotation.IdRes;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import io.ionic.cs.portals.portalsplayground.R;
import io.ionic.portals.Portal;
import io.ionic.portals.PortalFragment;
import io.ionic.portals.PortalManager;

public class PortalsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_portals);
        setTitle(R.string.title_portals);

        renderPortal("portal1", R.id.portal1);
        renderPortal("portal2", R.id.portal2);
        renderPortal("portal3", R.id.portal3);
    }

    public void renderPortal(String name, @IdRes int containerViewId) {
        Portal portal = PortalManager.getPortal(name);
        PortalFragment fragment = new PortalFragment(portal);

        getSupportFragmentManager().beginTransaction().replace(containerViewId, fragment).commit();
    }
}