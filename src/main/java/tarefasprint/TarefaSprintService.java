package tarefasprint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class TarefaSprintService extends GenericService<TarefaSprint>   {

    @Autowired
	private TarefaSprintDAO tarefasprintDAO;
	
	
}
