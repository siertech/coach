package step;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class StepService extends GenericService<Step>   {

    @Autowired
	private StepDAO stepDAO;
	
	
}
