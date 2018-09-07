package ritualitem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class RitualItemService extends GenericService<RitualItem>   {

    @Autowired
	private RitualItemDAO ritualitemDAO;
	
	
}
