package com.indiakhel.dharmik;

import com.getcapacitor.BridgeActivity;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;

// Meta Audience Network Imports
import com.facebook.ads.Ad;
import com.facebook.ads.AdError;
import com.facebook.ads.AdListener;
import com.facebook.ads.AdSettings;
import com.facebook.ads.AdSize;
import com.facebook.ads.AdView;
import com.facebook.ads.AudienceNetworkAds;

public class MainActivity extends BridgeActivity {

    private static final String TAG = "InstaGuruji_MetaAds";
    // Using client's actual banner placement ID
    private static final String PLACEMENT_ID = "1436148827638924_1436151597638647";

    private AdView metaBannerAd;
    private LinearLayout bannerContainer;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Log.d(TAG, "=== MainActivity onCreate() STARTED ===");

        // Initialize existing AdMob plugin
        registerPlugin(com.getcapacitor.community.admob.AdMob.class);

        Log.d(TAG, "AdMob plugin registered successfully");

        // Initialize Meta Audience Network
        initializeMetaAudienceNetwork();

        Log.d(TAG, "=== MainActivity onCreate() COMPLETED ===");
    }

    @Override
    public void onStart() {
        super.onStart();

        Log.d(TAG, "=== MainActivity onStart() STARTED ===");

        // Create banner container dynamically since layout doesn't have it
        createBannerContainerDynamically();

        // Load Meta Banner Ad
        loadMetaBanner();

        Log.d(TAG, "=== MainActivity onStart() COMPLETED ===");
    }

    /**
     * Create banner container dynamically and add it to the main layout
     */
    private void createBannerContainerDynamically() {
        try {
            // Get the root view - the entire screen
            ViewGroup rootView = (ViewGroup) getWindow().getDecorView().findViewById(android.R.id.content);

            // Create banner container
            bannerContainer = new LinearLayout(this);
            bannerContainer.setId(View.generateViewId());
            bannerContainer.setOrientation(LinearLayout.HORIZONTAL);
            bannerContainer.setGravity(Gravity.CENTER);
            bannerContainer.setBackgroundColor(Color.parseColor("#F5F5F5"));

            // Create a FrameLayout to position banner at bottom
            FrameLayout overlayLayout = new FrameLayout(this);
            FrameLayout.LayoutParams bannerParams = new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.WRAP_CONTENT
            );
            bannerParams.gravity = Gravity.BOTTOM; // Position at bottom

            // Add banner to overlay
            overlayLayout.addView(bannerContainer, bannerParams);

            // Add overlay to root with full screen parameters
            FrameLayout.LayoutParams overlayParams = new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            );
            rootView.addView(overlayLayout, overlayParams);

            Log.d(TAG, "Banner container created dynamically and positioned at bottom!");

        } catch (Exception e) {
            Log.e(TAG, "Error creating banner container: " + e.getMessage());
        }
    }

    /**
     * Initialize Meta Audience Network SDK
     */
    private void initializeMetaAudienceNetwork() {
        Log.d(TAG, "Initializing Meta Audience Network SDK...");

        // Initialize the SDK
        AudienceNetworkAds.initialize(this);

        // Enable test mode for debug builds to show demo banner
        AdSettings.addTestDevice("HASHED_ID");
        AdSettings.setTestMode(true);
        Log.d(TAG, "Test mode enabled for Meta Audience Network DEMO");

        Log.d(TAG, "Meta Audience Network SDK initialized successfully");
    }

    /**
     * Load Meta Audience Network Banner Ad
     */
    private void loadMetaBanner() {
        Log.d(TAG, "Loading Meta banner ad with placement ID: " + PLACEMENT_ID);

        try {
            // Create Meta Banner Ad
            metaBannerAd = new AdView(this, PLACEMENT_ID, AdSize.BANNER_HEIGHT_50);

            // Set ad listener for event tracking
            AdListener adListener = new AdListener() {
                @Override
                public void onError(Ad ad, AdError adError) {
                    Log.d(TAG, "onAdFailedToLoad: " + adError.getErrorMessage() + " (Code: " + adError.getErrorCode() + ")");
                }

                @Override
                public void onAdLoaded(Ad ad) {
                    Log.d(TAG, "onAdLoaded: Meta banner ad loaded successfully");
                }

                @Override
                public void onAdClicked(Ad ad) {
                    Log.d(TAG, "onAdClicked: User clicked on Meta banner ad");
                }

                @Override
                public void onLoggingImpression(Ad ad) {
                    Log.d(TAG, "onLoggingImpression: Meta banner ad impression logged");
                }
            };

            // Load the ad with listener - API updated for Meta Audience Network SDK 6.17.0
            metaBannerAd.loadAd(metaBannerAd.buildLoadAdConfig()
                .withAdListener(adListener)
                .build());

            // Add banner to container
            if (bannerContainer != null) {
                bannerContainer.addView(metaBannerAd);
                Log.d(TAG, "Meta banner ad added to container and load request sent");
            } else {
                Log.e(TAG, "Banner container not found in layout");
            }        } catch (Exception e) {
            Log.e(TAG, "Error loading Meta banner ad: " + e.getMessage());
        }
    }

    @Override
    public void onDestroy() {
        // Clean up Meta banner ad
        if (metaBannerAd != null) {
            metaBannerAd.destroy();
            Log.d(TAG, "Meta banner ad destroyed");
        }
        super.onDestroy();
    }
}
