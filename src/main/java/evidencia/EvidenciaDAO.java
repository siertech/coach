package evidencia;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class EvidenciaDAO  extends GenericDAO<Evidencia> {
	
	

	public EvidenciaDAO() {
		
		super(Evidencia.class);
		
	}
	
	
	
	
}
