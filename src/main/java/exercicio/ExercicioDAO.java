package exercicio;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class ExercicioDAO  extends GenericDAO<Exercicio> {
	
	

	public ExercicioDAO() {
		
		super(Exercicio.class);
		
	}
	
	
	
	
}
