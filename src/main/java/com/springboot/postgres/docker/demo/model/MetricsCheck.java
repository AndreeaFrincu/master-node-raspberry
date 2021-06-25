package com.springboot.postgres.docker.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"collected_at"}, allowGetters = true)

public class MetricsCheck {

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "collected_at", nullable = false)
    @CreatedDate
    private Date collectedAt;
}