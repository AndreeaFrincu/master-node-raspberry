package ro.mta.ssec.masternoderaspberry.controller;

import ro.mta.ssec.masternoderaspberry.exceptions.TestNotFoundException;
import ro.mta.ssec.masternoderaspberry.model.MetricsData;
import ro.mta.ssec.masternoderaspberry.service.MetricsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MetricsController {

    private final MetricsService metricsService;

    public MetricsController(MetricsService metricsService) {
        this.metricsService = metricsService;
    }

    @PostMapping("/metrics")
    public MetricsData addMetrics(@RequestBody MetricsData metrics) {

        return metricsService.save(metrics);

    }

    @GetMapping("/metrics")
    public ResponseEntity<List<MetricsData>> findAll() {

        return ResponseEntity.ok(metricsService.findAll());

    }

    @GetMapping("/metrics/{id}")
    public ResponseEntity<MetricsData> findMetricId(@PathVariable(value = "id") Integer id) {

        MetricsData metrics = metricsService.findById(id).orElseThrow(() -> new TestNotFoundException("Metric not found"
                + id));
        return ResponseEntity.ok().body(metrics);
    }

    @DeleteMapping("/metrics/{id}")
    public ResponseEntity<Void> deleteMetric(@PathVariable(value = "id") Integer id) {
        MetricsData metrics = metricsService.findById(id).orElseThrow(() -> new TestNotFoundException("Metric not found"
                + id));
        metricsService.delete(metrics);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/metrics/by-type/{metricType}")
    public List<MetricsData> findAllByMetricType(@PathVariable String metricType) {
        return metricsService.findAllByMetricType(metricType);
    }

    @GetMapping("/metrics/by-type-and-location/{metricType}/{location}")
    public List<MetricsData> findAllByMetricTypeAndLocation(@PathVariable String metricType, @PathVariable String location) {
        return metricsService.findAllByMetricTypeAndLocation(metricType, location);
    }

    //controller for angular pages paths
    @RequestMapping({  "/smart_building", "/data_center"})
    public String index() {
        return "forward:/index.html";
    }

}