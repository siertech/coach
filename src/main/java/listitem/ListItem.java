package listitem;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;
import list.List;

@Entity
@Table(name = "listitem")
@Getter @Setter
public  class ListItem extends CrudClass {

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String titulo;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String ok;
	
	
	@ManyToOne
	@JoinColumn(name="list_item_list_id")
    @JsonView(Views.Public.class)
	private  List  lista;
	

}
