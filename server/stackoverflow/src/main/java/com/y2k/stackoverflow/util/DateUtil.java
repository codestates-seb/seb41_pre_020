package com.y2k.stackoverflow.util;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

public class DateUtil {
    public static final int SEC = 60;
    public static final int MIN = 60;
    public static final int HOUR = 24;
    public static final int DAY = 30;
    public static final int MONTH = 12;

    public static String convertLocalDatetimeToTime(LocalDateTime localDateTime) {
        LocalDateTime now = LocalDateTime.now();

        long diffTime = localDateTime.until(now, ChronoUnit.SECONDS);

        String msg = null;
        if (diffTime < SEC){
            return diffTime + "secs ago";
        }
        diffTime = diffTime / SEC;
        if (diffTime < MIN) {
            return diffTime + "min ago";
        }
        diffTime = diffTime / MIN;
        if (diffTime < HOUR) {
            return diffTime + "hours ago";
        }
        diffTime = diffTime / HOUR;
        if (diffTime < DAY) {
            return diffTime + "days ago";
        }
        diffTime = diffTime / DAY;
        if (diffTime < MONTH) {
            return diffTime + "months ago";
        }

        diffTime = diffTime / MONTH;
        return diffTime + "years ago";
    }
}

