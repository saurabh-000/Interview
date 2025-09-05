package com.interviewproject
import com.facebook.react.bridge.*


class DeviceInfoModule(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
override fun getName() = "DeviceInfoModule"
@ReactMethod fun getOsVersion(promise: Promise) {
promise.resolve(android.os.Build.VERSION.RELEASE)
}
}