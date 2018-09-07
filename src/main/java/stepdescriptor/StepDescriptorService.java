package stepdescriptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class StepDescriptorService extends GenericService<StepDescriptor>   {

    @Autowired
	private StepDescriptorDAO stepdescriptorDAO;
	
	
}
