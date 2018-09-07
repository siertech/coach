package tarefasprint;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class TarefaSprintDAO  extends GenericDAO<TarefaSprint> {
	
	

	public TarefaSprintDAO() {
		
		super(TarefaSprint.class);
		
	}
	
	
	
	
}
