package list;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class ListService extends GenericService<List>   {

    @Autowired
	private ListDAO listDAO;
	
	
}
