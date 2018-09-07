package frequenciasonora;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class FrequenciaSonoraDAO  extends GenericDAO<FrequenciaSonora> {
	
	

	public FrequenciaSonoraDAO() {
		
		super(FrequenciaSonora.class);
		
	}
	
	
	
	
}
