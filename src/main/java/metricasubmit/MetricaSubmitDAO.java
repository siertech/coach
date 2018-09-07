package metricasubmit;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class MetricaSubmitDAO  extends GenericDAO<MetricaSubmit> {
	
	

	public MetricaSubmitDAO() {
		
		super(MetricaSubmit.class);
		
	}
	
	
	
	
}
