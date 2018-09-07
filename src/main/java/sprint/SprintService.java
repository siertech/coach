package sprint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class SprintService extends GenericService<Sprint>   {

    @Autowired
	private SprintDAO sprintDAO;
	
	
}
