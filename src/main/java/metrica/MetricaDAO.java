package metrica;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class MetricaDAO  extends GenericDAO<Metrica> {
	
	

	public MetricaDAO() {
		
		super(Metrica.class);
		
	}
	
	
	
	
}
