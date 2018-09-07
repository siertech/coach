package metrica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class MetricaService extends GenericService<Metrica>   {

    @Autowired
	private MetricaDAO metricaDAO;
	
	
}
