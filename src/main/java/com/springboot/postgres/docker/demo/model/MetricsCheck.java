package com.springboot.postgres.docker.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class MetricsCheck {

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "collected_at", nullable = false)
    @CreatedDate
    private String collected_at;
    private static final long MSEC_SINCE_EPOCH = System.currentTimeMillis();

    public MetricsCheck() {
        Date time = new Date( MSEC_SINCE_EPOCH );

        SimpleDateFormat sdf = new SimpleDateFormat( "HH:mm" );
        this.collected_at = sdf.format(time);
    }
}