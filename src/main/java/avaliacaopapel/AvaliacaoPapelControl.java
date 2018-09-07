package avaliacaopapel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.model.GenericControl;
import com.siertech.stapi.util.AjaxResponse;

@Controller
@Secured("IS_AUTHENTICATED_FULLY")
public class AvaliacaoPapelControl extends GenericControl<AvaliacaoPapel> {
	
	
	@Autowired
	private AvaliacaoPapelService avaliacaopapelService;
	

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/avaliacaopapel/change-attr-value", method=RequestMethod.GET)
    public AjaxResponse<AvaliacaoPapel> changeAttr(@RequestParam Long  id, @RequestParam String key, @RequestParam String value){
		
		avaliacaopapelService.changeAttr(id, key, value);
		return null;
	}
	
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/avaliacaopapel/add/", method=RequestMethod.POST)
    public AjaxResponse<AvaliacaoPapel> addOrUpdate(@RequestBody AvaliacaoPapel item){
		
		return addOrUpdateAndRespond(item);
	}
	
	@Override
	@RequestMapping(value="/avaliacaopapel", method=RequestMethod.GET)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
    public AjaxResponse<AvaliacaoPapel> getAll(){
		
		return this.getAllAndRespond();

	}
	
	//Por id
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/avaliacaopapel/get", method= RequestMethod.GET)
	public AjaxResponse<AvaliacaoPapel> getById(@RequestParam Long id){
		
		
		return getByIdAndRespond(id);
   	
	}
	
	//Atrav s de uma busca
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/avaliacaopapel/busca", method= RequestMethod.GET)
	public AjaxResponse<AvaliacaoPapel> getLike(@RequestParam String propriedade,@RequestParam String query){
		
		return getLikeAndRespond(propriedade,query);
		
	}
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/avaliacaopapel/delete/", method=RequestMethod.POST)
    public AjaxResponse<AvaliacaoPapel> delete(@RequestBody long[] ids){
		
		avaliacaopapelService.deleteByIds(ids);
		
		return null;

	}


	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/avaliacaopapel/busca/map", method= RequestMethod.GET)
	public AjaxResponse<AvaliacaoPapel> getLikeMap(@RequestParam String[] qs,@RequestParam int pagina,@RequestParam int max,@RequestParam String extra) {
		
		return getLikeMapAndRespond(qs, pagina, max, extra);
	}
	
	
}
