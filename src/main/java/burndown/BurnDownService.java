package burndown;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class BurnDownService extends GenericService<BurnDown>   {

    @Autowired
	private BurnDownDAO burndownDAO;
	
	
}
