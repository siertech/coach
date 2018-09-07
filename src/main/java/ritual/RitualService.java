package ritual;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class RitualService extends GenericService<Ritual>   {

    @Autowired
	private RitualDAO ritualDAO;
	
	
}
