package com.springboot.postgres.docker.demo.repository;

import com.springboot.postgres.docker.demo.model.MetricsData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MetricsRepository extends JpaRepository<MetricsData, Integer> {

    List<MetricsData> findAllByMetricType(@Param("metricType") String metricType);
    List<MetricsData> findAllByMetricTypeAndLocation(@Param("metricType") String metricType, @Param("location") String location);
}
