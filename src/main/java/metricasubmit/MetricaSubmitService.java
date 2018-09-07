package metricasubmit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class MetricaSubmitService extends GenericService<MetricaSubmit>   {

    @Autowired
	private MetricaSubmitDAO metricasubmitDAO;
	
	
}
