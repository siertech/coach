package papel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class PapelService extends GenericService<Papel>   {

    @Autowired
	private PapelDAO papelDAO;
	
	
}
