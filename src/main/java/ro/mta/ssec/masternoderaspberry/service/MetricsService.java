package ro.mta.ssec.masternoderaspberry.service;

import ro.mta.ssec.masternoderaspberry.model.MetricsData;
import ro.mta.ssec.masternoderaspberry.repository.MetricsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MetricsService {

    private final MetricsRepository metricsRepository;

    @Autowired
    public MetricsService(MetricsRepository metricsRepository) {
        this.metricsRepository = metricsRepository;
    }

    public MetricsData save(MetricsData metrics) {
        return metricsRepository.save(metrics);
    }

    public List<MetricsData> findAll() {
        return metricsRepository.findAll();
    }

    public Optional<MetricsData> findById(Integer id) {
        return metricsRepository.findById(id);
    }

    public List<MetricsData> findAllByMetricType(String metricType) {
        return metricsRepository.findAllByMetricType(metricType);
    }

    public List<MetricsData> findAllByMetricTypeAndLocation(String metricType, String location) {
        return metricsRepository.findAllByMetricTypeAndLocation(metricType, location);
    }

    public void delete(MetricsData metrics) {
        metricsRepository.delete(metrics);
    }

}
