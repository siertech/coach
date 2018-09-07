package habitosubmit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class HabitoSubmitService extends GenericService<HabitoSubmit>   {

    @Autowired
	private HabitoSubmitDAO habitosubmitDAO;
	
	
}
