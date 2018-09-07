package stepitem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class StepItemService extends GenericService<StepItem>   {

    @Autowired
	private StepItemDAO stepitemDAO;
	
	
}
